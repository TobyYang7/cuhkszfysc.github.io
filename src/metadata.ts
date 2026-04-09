/**
 * Allowed metadata fields, options, and corresponding description.
 * @see https://sustech-application.com/docs/metadata
 */
const METADATA = {
  type: {
    grad: "研究生项目",
    abroad: "境外交流项目",
    job: "就业",
    recruit: "招生",
    experience: "专项经验分享",
  },

  degree: {
    doctor: "博士",
    master: "硕士",
  },

  /**
   * ISO 3166 Country Codes
   * @see https://countrycode.org/
   */
  region: {
    au: "澳大利亚",
    ca: "加拿大",
    ch: "瑞士",
    cn: "中国大陆",
    de: "德国",
    dk: "丹麦",
    fi: "芬兰",
    fr: "法国",
    gb: "英国",
    hk: "香港特别行政区",
    jp: "日本",
    kr: "韩国",
    mo: "澳门特别行政区",
    nl: "荷兰",
    nz: "新西兰",
    sa: "沙特阿拉伯",
    sg: "新加坡",
    tw: "台湾省",
    us: "美国",
  },

  school: {
    sds: "数据科学学院",
    sai: "人工智能学院",
    hss: "人文社科学院",
    sse: "理工学院",
    mus: "音乐学院",
    sme: "经管学院",
    med: "医学院",
  },

  year: Object.fromEntries(
    Array.from({ length: 89 }, (_, index) => {
      const year = String(index + 11).padStart(2, "0");
      return [year, `20${year} 级`];
    }),
  ),

};

export default METADATA;

// TODO: we should probably move to a better runtime typing tool, maybe Zod?
// TODO: migrated to TS, migrate docs as well

// need to type keys of METADATA correctly
export const OPTIONS = Object.fromEntries(
  (Object.keys(METADATA) as (keyof typeof METADATA)[]).map((k) => [
    k,
    Object.keys(METADATA[k]),
  ]),
);
