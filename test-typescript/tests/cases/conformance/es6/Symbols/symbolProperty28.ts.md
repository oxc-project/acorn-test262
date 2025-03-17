__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 71,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 16,
              "end": 34,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 16,
                "end": 22,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 23,
                "end": 34,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 65,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 55,
                      "end": 64,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 57,
                          "end": 62,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 57,
                            "end": 58,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 60,
                            "end": 62,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 98,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 94,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 109,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 109,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 109,
                  "decorators": [],
                  "name": "C2",
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
      "start": 111,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 146,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 121,
              "end": 144,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 121,
                "end": 142,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "MemberExpression",
                  "start": 123,
                  "end": 141,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 141,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
