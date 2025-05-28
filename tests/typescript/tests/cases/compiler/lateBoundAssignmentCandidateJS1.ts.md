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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 91,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 90,
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
              "callee": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 84,
                  "end": 89,
                  "value": "bar",
                  "raw": "\"bar\""
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 339,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 100,
        "end": 339,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 111,
          "end": 339,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 194,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 181,
                "end": 185,
                "decorators": [],
                "name": "kBar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 189,
                "end": 193,
                "value": null,
                "raw": "null"
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 200,
              "end": 244,
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
              "value": {
                "type": "FunctionExpression",
                "start": 207,
                "end": 244,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 227,
                          "end": 231
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 236,
                          "decorators": [],
                          "name": "kBar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 287,
              "end": 337,
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
              "value": {
                "type": "FunctionExpression",
                "start": 294,
                "end": 337,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 302,
                  "end": 337,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 312,
                      "end": 331,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 312,
                        "end": 330,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 312,
                          "end": 322,
                          "object": {
                            "type": "ThisExpression",
                            "start": 312,
                            "end": 316
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 321,
                            "decorators": [],
                            "name": "kBar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
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
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
