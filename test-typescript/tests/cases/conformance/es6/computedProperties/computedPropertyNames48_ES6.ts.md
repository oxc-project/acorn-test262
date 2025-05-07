__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 61,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 31,
        "decorators": [],
        "name": "extractIndexer",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 56,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 38,
              "end": 56,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 40,
                  "end": 54,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 41,
                      "end": 50,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 42,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 51,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 54,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 60,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 60,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 63,
      "end": 75,
      "body": {
        "type": "TSEnumBody",
        "start": 70,
        "end": 75,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 72,
            "end": 73,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 87,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 84,
                "end": 87
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
      "type": "ExpressionStatement",
      "start": 90,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 121,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 105,
            "end": 120,
            "properties": [
              {
                "type": "Property",
                "start": 111,
                "end": 118,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 116,
                  "end": 118,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 90,
          "end": 104,
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 182,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 181,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 163,
            "end": 180,
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 178,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 170,
                  "end": 173,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 176,
                  "end": 178,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 162,
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 246,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 245,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 223,
            "end": 244,
            "properties": [
              {
                "type": "Property",
                "start": 229,
                "end": 242,
                "computed": true,
                "key": {
                  "type": "LogicalExpression",
                  "start": 230,
                  "end": 237,
                  "operator": "||",
                  "left": {
                    "type": "Literal",
                    "start": 230,
                    "end": 232,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 222,
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
