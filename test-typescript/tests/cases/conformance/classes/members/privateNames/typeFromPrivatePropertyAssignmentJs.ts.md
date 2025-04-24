__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 0,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 207,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 63,
              "end": 65,
              "name": "a"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 123,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 120,
              "end": 122,
              "name": "b"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 205,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 142,
                    "end": 166,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 148,
                        "end": 165,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 149,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 152,
                          "end": 165,
                          "operator": "||",
                          "left": {
                            "type": "MemberExpression",
                            "start": 152,
                            "end": 159,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 152,
                              "end": 156
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 157,
                              "end": 159,
                              "name": "a"
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 163,
                            "end": 165,
                            "properties": []
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 199,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 175,
                      "end": 198,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 182,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 175,
                          "end": 179
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 180,
                          "end": 182,
                          "name": "b"
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 185,
                        "end": 198,
                        "operator": "||",
                        "left": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 192,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 190,
                            "end": 192,
                            "name": "b"
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 196,
                          "end": 198,
                          "properties": []
                        }
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
