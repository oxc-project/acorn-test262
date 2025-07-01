__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "kBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 74
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 83
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 84,
                  "end": 89
                }
              ],
              "optional": false,
              "start": 77,
              "end": 90
            },
            "definite": false,
            "start": 70,
            "end": 90
          }
        ],
        "declare": false,
        "start": 64,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo0",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 110
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "kBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 185
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 189,
                "end": 193
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 180,
              "end": 194
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 207
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 227,
                          "end": 231
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "kBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 236
                        },
                        "optional": false,
                        "computed": true,
                        "start": 227,
                        "end": 237
                      },
                      "start": 220,
                      "end": 238
                    }
                  ],
                  "start": 210,
                  "end": 244
                },
                "expression": false,
                "start": 207,
                "end": 244
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 200,
              "end": 244
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 294
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 300
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 312,
                            "end": 316
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kBar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 317,
                            "end": 321
                          },
                          "optional": false,
                          "computed": true,
                          "start": 312,
                          "end": 322
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 330
                        },
                        "start": 312,
                        "end": 330
                      },
                      "directive": null,
                      "start": 312,
                      "end": 331
                    }
                  ],
                  "start": 302,
                  "end": 337
                },
                "expression": false,
                "start": 294,
                "end": 337
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 287,
              "end": 337
            }
          ],
          "start": 111,
          "end": 339
        },
        "abstract": false,
        "declare": false,
        "start": 100,
        "end": 339
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 339
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 339
}
```
