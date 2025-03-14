__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "decorators": [],
            "name": "field1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 18,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 12,
                "end": 18
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 50,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 50,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 48,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 40,
                        "decorators": [],
                        "name": "msg",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 35,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 37,
                            "end": 40
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 43,
                        "end": 47
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 471,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 59,
        "end": 471,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 471,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 77,
              "end": 120,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 88,
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
                "start": 88,
                "end": 120,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 113,
                  "end": 120,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 89,
                    "end": 111,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 111,
                      "decorators": [],
                      "name": "field1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 125,
              "end": 469,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 125,
                "end": 139,
                "decorators": [],
                "name": "messageHandler",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 142,
                "end": 468,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 148,
                  "end": 468,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 158,
                      "end": 178,
                      "expression": {
                        "type": "CallExpression",
                        "start": 158,
                        "end": 177,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 170,
                            "end": 176,
                            "decorators": [],
                            "name": "field1",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 158,
                          "end": 169,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 165,
                            "decorators": [],
                            "name": "console",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 169,
                            "decorators": [],
                            "name": "log",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 70,
          "decorators": [],
          "name": "Test1",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
