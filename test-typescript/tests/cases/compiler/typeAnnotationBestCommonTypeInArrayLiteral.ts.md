typeAnnotationBestCommonTypeInArrayLiteral.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 408,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 136,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 55,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 74,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "link",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 96,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 86,
              "decorators": [],
              "name": "classes",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 115,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "text",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 134,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "icon",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "IMenuItem",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 406,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 162,
            "decorators": [],
            "name": "menuData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 162,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 151,
                "end": 162,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 151,
                  "end": 160,
                  "typeName": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 160,
                    "decorators": [],
                    "name": "IMenuItem",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 165,
            "end": 406,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 171,
                "end": 288,
                "properties": [
                  {
                    "type": "Property",
                    "start": 181,
                    "end": 196,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 181,
                      "end": 185,
                      "raw": "\"id\"",
                      "value": "id"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 187,
                      "end": 196,
                      "raw": "\"ourLogo\"",
                      "value": "ourLogo"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 206,
                    "end": 221,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 206,
                      "end": 212,
                      "raw": "\"type\"",
                      "value": "type"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 214,
                      "end": 221,
                      "raw": "\"image\"",
                      "value": "image"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 231,
                    "end": 241,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 231,
                      "end": 237,
                      "raw": "\"link\"",
                      "value": "link"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 239,
                      "end": 241,
                      "raw": "\"\"",
                      "value": ""
                    }
                  },
                  {
                    "type": "Property",
                    "start": 251,
                    "end": 282,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 251,
                      "end": 257,
                      "raw": "\"icon\"",
                      "value": "icon"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 259,
                      "end": 282,
                      "raw": "\"modules/menu/logo.svg\"",
                      "value": "modules/menu/logo.svg"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 290,
                "end": 404,
                "properties": [
                  {
                    "type": "Property",
                    "start": 300,
                    "end": 319,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 300,
                      "end": 304,
                      "raw": "\"id\"",
                      "value": "id"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 306,
                      "end": 319,
                      "raw": "\"productName\"",
                      "value": "productName"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 329,
                    "end": 346,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 329,
                      "end": 335,
                      "raw": "\"type\"",
                      "value": "type"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 337,
                      "end": 346,
                      "raw": "\"default\"",
                      "value": "default"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 356,
                    "end": 366,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 356,
                      "end": 362,
                      "raw": "\"link\"",
                      "value": "link"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 364,
                      "end": 366,
                      "raw": "\"\"",
                      "value": ""
                    }
                  },
                  {
                    "type": "Property",
                    "start": 376,
                    "end": 398,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 376,
                      "end": 382,
                      "raw": "\"text\"",
                      "value": "text"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 384,
                      "end": 398,
                      "raw": "\"Product Name\"",
                      "value": "Product Name"
                    }
                  }
                ]
              }
            ]
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
