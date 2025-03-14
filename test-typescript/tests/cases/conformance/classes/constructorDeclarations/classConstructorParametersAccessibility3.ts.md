__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 29,
                  "end": 48,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 48,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 42,
                        "end": 48
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 169,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 169,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 167,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 101,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 167,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 167,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 130,
                    "end": 139,
                    "expression": {
                      "type": "CallExpression",
                      "start": 130,
                      "end": 138,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 130,
                        "end": 135
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 155,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 154,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 148,
                        "end": 152
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      }
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
                  "type": "TSParameterProperty",
                  "start": 102,
                  "end": 118,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 118,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 112,
                        "end": 118
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 70,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 83,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 185,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 185,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 185,
                  "decorators": [],
                  "name": "Derived",
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
      "type": "ExpressionStatement",
      "start": 187,
      "end": 191,
      "expression": {
        "type": "MemberExpression",
        "start": 187,
        "end": 190,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 187,
          "end": 188,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "p",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
