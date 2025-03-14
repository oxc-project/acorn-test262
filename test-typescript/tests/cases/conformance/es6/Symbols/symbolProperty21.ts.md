__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 86,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 48,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 25,
              "end": 43,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 25,
                "end": 31,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 32,
                "end": 43,
                "decorators": [],
                "name": "unscopables",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 84,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 54,
              "end": 79,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 79,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
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
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 143,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 125,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 125,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 119,
                "end": 125,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 142,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 128,
          "end": 142,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 130,
              "end": 135,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 133,
                  "end": 134,
                  "typeName": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 136,
              "end": 140,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 137,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 139,
                  "end": 140,
                  "typeName": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 251,
      "expression": {
        "type": "CallExpression",
        "start": 145,
        "end": 250,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 149,
            "end": 249,
            "properties": [
              {
                "type": "Property",
                "start": 155,
                "end": 186,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 156,
                  "end": 181,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 162,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 181,
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 186,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 192,
                "end": 215,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 193,
                  "end": 211,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 199,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 211,
                    "decorators": [],
                    "name": "toPrimitive",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 221,
                "end": 247,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 222,
                  "end": 240,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 228,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 240,
                    "decorators": [],
                    "name": "unscopables",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 247,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 145,
          "end": 148,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
