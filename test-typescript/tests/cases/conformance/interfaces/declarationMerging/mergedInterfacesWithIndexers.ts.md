__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 237,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 122,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 122,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 100,
            "end": 120,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 104,
                    "end": 110
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 177,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 177,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 143,
            "end": 175,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 153,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 156,
                "end": 174,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 158,
                    "end": 172,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 164,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 187,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 189,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 197,
            "end": 201,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 199,
              "end": 200,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 212,
            "end": 218,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 214,
              "end": 217,
              "raw": "'1'",
              "value": "1",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 229,
            "end": 236,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 231,
              "end": 235,
              "raw": "'hi'",
              "value": "hi",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
