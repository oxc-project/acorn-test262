callOverloadViaElementAccessExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 17,
              "end": 37,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 18,
                  "end": 27,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 21,
                      "end": 27
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 30,
                  "end": 36
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 45,
              "end": 65,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 58,
                  "end": 64
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 115,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 109,
                    "argument": {
                      "type": "Literal",
                      "start": 104,
                      "end": 108,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 77,
                      "end": 80
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 83,
                  "end": 86
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 127,
            "end": 134,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 149,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 152,
            "end": 163,
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 162,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 152,
              "end": 160,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 154,
                "end": 159,
                "raw": "'foo'",
                "value": "foo"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 179,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 179,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 173,
                "end": 179
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 182,
            "end": 194,
            "arguments": [
              {
                "type": "Literal",
                "start": 191,
                "end": 193,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 182,
              "end": 190,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 184,
                "end": 189,
                "raw": "'foo'",
                "value": "foo"
              }
            },
            "optional": false
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
