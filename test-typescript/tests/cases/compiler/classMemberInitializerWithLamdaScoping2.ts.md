classMemberInitializerWithLamdaScoping2_0.ts
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
  "sourceType": "module"
}
```
classMemberInitializerWithLamdaScoping2_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 464,
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
      "type": "ClassDeclaration",
      "start": 52,
      "end": 464,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 464,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 113,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
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
              "start": 81,
              "end": 113,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 113,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 82,
                  "end": 104,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 104,
                    "decorators": [],
                    "name": "field1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 98,
                        "end": 104
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
            "start": 118,
            "end": 462,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 132,
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
              "start": 135,
              "end": 461,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 461,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 171,
                    "expression": {
                      "type": "CallExpression",
                      "start": 151,
                      "end": 170,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 163,
                          "end": 169,
                          "decorators": [],
                          "name": "field1",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 151,
                        "end": 162,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 158,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 162,
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
        "start": 58,
        "end": 63,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
