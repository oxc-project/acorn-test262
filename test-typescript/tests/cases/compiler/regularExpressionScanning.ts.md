__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2521
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                23
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      15,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    15,
                    21
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 1
                    },
                    "start": {
                      "column": 15,
                      "line": 1
                    }
                  }
                },
                "range": [
                  15,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "/foo/visualstudiocode",
                "regex": {
                  "flags": "acddeiiloosstuuv",
                  "pattern": "foo"
                },
                "value": null,
                "range": [
                  39,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 1,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/(?med-ium:bar)/",
                "regex": {
                  "flags": "",
                  "pattern": "(?med-ium:bar)"
                },
                "value": null,
                "range": [
                  85,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 1,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\0/",
                "regex": {
                  "flags": "",
                  "pattern": "\\0"
                },
                "value": null,
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\1/",
                "regex": {
                  "flags": "",
                  "pattern": "\\1"
                },
                "value": null,
                "range": [
                  132,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 1,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\2/",
                "regex": {
                  "flags": "",
                  "pattern": "\\2"
                },
                "value": null,
                "range": [
                  139,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 1,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/(hi)\\1/",
                "regex": {
                  "flags": "",
                  "pattern": "(hi)\\1"
                },
                "value": null,
                "range": [
                  146,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 1,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/(hi) (hello) \\2/",
                "regex": {
                  "flags": "",
                  "pattern": "(hi) (hello) \\2"
                },
                "value": null,
                "range": [
                  157,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 1,
                    "line": 11
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/",
                "regex": {
                  "flags": "",
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009"
                },
                "value": null,
                "range": [
                  177,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 12
                  },
                  "start": {
                    "column": 1,
                    "line": 12
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009"
                },
                "value": null,
                "range": [
                  237,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 13
                  },
                  "start": {
                    "column": 1,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)/",
                "regex": {
                  "flags": "",
                  "pattern": "(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)"
                },
                "value": null,
                "range": [
                  298,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 14
                  },
                  "start": {
                    "column": 1,
                    "line": 14
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))/",
                "regex": {
                  "flags": "",
                  "pattern": "(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))"
                },
                "value": null,
                "range": [
                  363,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 15
                  },
                  "start": {
                    "column": 1,
                    "line": 15
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,/",
                "regex": {
                  "flags": "",
                  "pattern": "{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,"
                },
                "value": null,
                "range": [
                  450,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 17
                  },
                  "start": {
                    "column": 1,
                    "line": 17
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]/",
                "regex": {
                  "flags": "",
                  "pattern": "[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]"
                },
                "value": null,
                "range": [
                  545,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 19
                  },
                  "start": {
                    "column": 1,
                    "line": 19
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
                },
                "value": null,
                "range": [
                  586,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 20
                  },
                  "start": {
                    "column": 1,
                    "line": 20
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
                },
                "value": null,
                "range": [
                  659,
                  730
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 21
                  },
                  "start": {
                    "column": 1,
                    "line": 21
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
                },
                "value": null,
                "range": [
                  733,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 22
                  },
                  "start": {
                    "column": 1,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/",
                "regex": {
                  "flags": "",
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
                },
                "value": null,
                "range": [
                  807,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 23
                  },
                  "start": {
                    "column": 1,
                    "line": 23
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
                },
                "value": null,
                "range": [
                  875,
                  941
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 24
                  },
                  "start": {
                    "column": 1,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
                },
                "value": null,
                "range": [
                  944,
                  1010
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 25
                  },
                  "start": {
                    "column": 1,
                    "line": 25
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
                },
                "value": null,
                "range": [
                  1013,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 26
                  },
                  "start": {
                    "column": 1,
                    "line": 26
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
                },
                "value": null,
                "range": [
                  1073,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 27
                  },
                  "start": {
                    "column": 1,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
                },
                "value": null,
                "range": [
                  1134,
                  1192
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 28
                  },
                  "start": {
                    "column": 1,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/",
                "regex": {
                  "flags": "",
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C"
                },
                "value": null,
                "range": [
                  1217,
                  1241
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 1,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C"
                },
                "value": null,
                "range": [
                  1244,
                  1269
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 31
                  },
                  "start": {
                    "column": 1,
                    "line": 31
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/",
                "regex": {
                  "flags": "",
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
                },
                "value": null,
                "range": [
                  1272,
                  1317
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 32
                  },
                  "start": {
                    "column": 1,
                    "line": 32
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
                },
                "value": null,
                "range": [
                  1320,
                  1366
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 33
                  },
                  "start": {
                    "column": 1,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
                },
                "value": null,
                "range": [
                  1369,
                  1415
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 34
                  },
                  "start": {
                    "column": 1,
                    "line": 34
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/",
                "regex": {
                  "flags": "",
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
                },
                "value": null,
                "range": [
                  1444,
                  1529
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 36
                  },
                  "start": {
                    "column": 1,
                    "line": 36
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
                },
                "value": null,
                "range": [
                  1532,
                  1618
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 37
                  },
                  "start": {
                    "column": 1,
                    "line": 37
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
                },
                "value": null,
                "range": [
                  1621,
                  1707
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 38
                  },
                  "start": {
                    "column": 1,
                    "line": 38
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]"
                },
                "value": null,
                "range": [
                  1710,
                  1786
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 39
                  },
                  "start": {
                    "column": 1,
                    "line": 39
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]"
                },
                "value": null,
                "range": [
                  1789,
                  1871
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 40
                  },
                  "start": {
                    "column": 1,
                    "line": 40
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]"
                },
                "value": null,
                "range": [
                  1874,
                  1956
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 41
                  },
                  "start": {
                    "column": 1,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]"
                },
                "value": null,
                "range": [
                  1959,
                  2035
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 42
                  },
                  "start": {
                    "column": 1,
                    "line": 42
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]"
                },
                "value": null,
                "range": [
                  2038,
                  2132
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 43
                  },
                  "start": {
                    "column": 1,
                    "line": 43
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]"
                },
                "value": null,
                "range": [
                  2135,
                  2229
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 44
                  },
                  "start": {
                    "column": 1,
                    "line": 44
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]"
                },
                "value": null,
                "range": [
                  2232,
                  2320
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 45
                  },
                  "start": {
                    "column": 1,
                    "line": 45
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]"
                },
                "value": null,
                "range": [
                  2323,
                  2413
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 46
                  },
                  "start": {
                    "column": 1,
                    "line": 46
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]"
                },
                "value": null,
                "range": [
                  2416,
                  2516
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 47
                  },
                  "start": {
                    "column": 1,
                    "line": 47
                  }
                }
              }
            ],
            "range": [
              26,
              2519
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 48
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "range": [
            6,
            2519
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        2520
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 49
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
