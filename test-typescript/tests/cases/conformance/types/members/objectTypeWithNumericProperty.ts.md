objectTypeWithNumericProperty.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 486,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 43,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 33,
              "end": 34,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "raw": "1.1",
              "value": 1.1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 72,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 83,
            "end": 87,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 98,
            "end": 104,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 100,
              "end": 103,
              "raw": "1.1",
              "value": 1.1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 112,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 115,
            "end": 121,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 117,
              "end": 120,
              "raw": "'1'",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 132,
            "end": 140,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 134,
              "end": 139,
              "raw": "'1.1'",
              "value": "1.1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 143,
      "end": 190,
      "body": {
        "type": "TSInterfaceBody",
        "start": 155,
        "end": 190,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 161,
            "end": 171,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 188,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 176,
              "end": 179,
              "raw": "1.1",
              "value": 1.1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 181,
                "end": 187
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 211,
            "end": 215,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 213,
              "end": 214,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 226,
            "end": 232,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 228,
              "end": 231,
              "raw": "1.1",
              "value": 1.1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 243,
            "end": 249,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 245,
              "end": 248,
              "raw": "'1'",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 260,
            "end": 268,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 262,
              "end": 267,
              "raw": "'1.1'",
              "value": "1.1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 313,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 278,
                "end": 313,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 284,
                    "end": 294,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 284,
                      "end": 285,
                      "raw": "1",
                      "value": 1
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 285,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 299,
                    "end": 311,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 299,
                      "end": 302,
                      "raw": "1.1",
                      "value": 1.1
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 302,
                      "end": 310,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 321,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 324,
            "end": 328,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 326,
              "end": 327,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 336,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 339,
            "end": 345,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 341,
              "end": 344,
              "raw": "1.1",
              "value": 1.1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 362,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 356,
            "end": 362,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 358,
              "end": 361,
              "raw": "'1'",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 370,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 373,
            "end": 381,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 375,
              "end": 380,
              "raw": "'1.1'",
              "value": "1.1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 417,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 392,
            "end": 417,
            "properties": [
              {
                "type": "Property",
                "start": 398,
                "end": 402,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 398,
                  "end": 399,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 401,
                  "end": 402,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 408,
                "end": 415,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 408,
                  "end": 411,
                  "raw": "1.1",
                  "value": 1.1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 413,
                  "end": 415,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 419,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 428,
            "end": 432,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 430,
              "end": 431,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 449,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 440,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 443,
            "end": 449,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 445,
              "end": 448,
              "raw": "1.1",
              "value": 1.1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 451,
      "end": 467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 466,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 457,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 466,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 462,
              "end": 465,
              "raw": "'1'",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 485,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 474,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 477,
            "end": 485,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 477,
              "end": 478,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 479,
              "end": 484,
              "raw": "'1.1'",
              "value": "1.1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
