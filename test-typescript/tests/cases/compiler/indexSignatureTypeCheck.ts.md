__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 54,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 30,
            "end": 51,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 44,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
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
        "end": 22,
        "decorators": [],
        "name": "IPropertySet",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 77,
            "decorators": [],
            "name": "ps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 77,
                  "decorators": [],
                  "name": "IPropertySet",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 84,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 100,
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 100,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 97,
                "end": 100
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 110,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 121,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "decorators": [],
            "name": "ps",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "decorators": [],
            "name": "index",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 124,
          "end": 126,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 257,
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 257,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 158,
            "end": 172,
            "parameters": [
              {
                "type": "Identifier",
                "start": 159,
                "end": 170,
                "decorators": [],
                "name": "p2",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 177,
            "end": 192,
            "parameters": [
              {
                "type": "RestElement",
                "start": 178,
                "end": 190,
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 183,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 183,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 185,
                    "end": 190,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 185,
                      "end": 188
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 197,
            "end": 223,
            "parameters": [
              {
                "type": "Identifier",
                "start": 198,
                "end": 208,
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 200,
                  "end": 208,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 202,
                    "end": 208
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 210,
                "end": 221,
                "decorators": [],
                "name": "p5",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 213,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 228,
            "end": 255,
            "parameters": [
              {
                "type": "Identifier",
                "start": 229,
                "end": 239,
                "decorators": [],
                "name": "p6",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 233,
                    "end": 239
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 241,
                "end": 253,
                "argument": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 246,
                  "decorators": [],
                  "name": "p7",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 253,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 248,
                    "end": 253,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 248,
                      "end": 251
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 151,
        "decorators": [],
        "name": "indexErrors",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
