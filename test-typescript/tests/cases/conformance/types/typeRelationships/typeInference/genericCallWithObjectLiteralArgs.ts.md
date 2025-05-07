__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 261,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 56,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 56,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 54,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 37,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 19,
              "end": 37,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 21,
                  "end": 28,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 24,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 27,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 29,
                  "end": 35,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 32,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
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
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "type": "VariableDeclaration",
      "start": 58,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 66,
            "end": 90,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 70,
                "end": 89,
                "properties": [
                  {
                    "type": "Property",
                    "start": 72,
                    "end": 78,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 75,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 80,
                    "end": 87,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 83,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 85,
                      "end": 87,
                      "raw": "''",
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
              "start": 66,
              "end": 69,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 110,
            "end": 133,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 114,
                "end": 132,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 122,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 119,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 121,
                      "end": 122,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 124,
                    "end": 130,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 127,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 129,
                      "end": 130,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 185,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 162,
                "end": 184,
                "properties": [
                  {
                    "type": "Property",
                    "start": 164,
                    "end": 172,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 167,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 172,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 174,
                    "end": 182,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 177,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 214,
            "end": 246,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 226,
                "end": 245,
                "properties": [
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 234,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 231,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 233,
                      "end": 234,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 236,
                    "end": 243,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 239,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 241,
                      "end": 243,
                      "raw": "''",
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
              "start": 214,
              "end": 217,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 217,
              "end": 225,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 218,
                  "end": 224,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 224,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
