__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 339,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 91,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 90,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "kBar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 77,
              "end": 90,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 84,
                  "end": 89,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 339,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 100,
        "end": 339,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 111,
          "end": 339,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 194,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 181,
                "end": 185,
                "decorators": [],
                "name": "kBar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 189,
                "end": 193,
                "raw": "null",
                "value": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 200,
              "end": 244,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 204,
                "end": 207,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 207,
                "end": 244,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 210,
                  "end": 244,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 220,
                      "end": 238,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 227,
                        "end": 237,
                        "computed": true,
                        "object": {
                          "type": "ThisExpression",
                          "start": 227,
                          "end": 231
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 236,
                          "decorators": [],
                          "name": "kBar",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
            },
            {
              "type": "MethodDefinition",
              "start": 287,
              "end": 337,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 291,
                "end": 294,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 294,
                "end": 337,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 302,
                  "end": 337,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 312,
                      "end": 331,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 312,
                        "end": 330,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 312,
                          "end": 322,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 312,
                            "end": 316
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 321,
                            "decorators": [],
                            "name": "kBar",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 330,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
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
                    "type": "Identifier",
                    "start": 295,
                    "end": 300,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
          "start": 106,
          "end": 110,
          "decorators": [],
          "name": "foo0",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
