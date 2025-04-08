__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./b",
        "raw": "'./b'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 132,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 132,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 131,
              "properties": [
                {
                  "type": "Property",
                  "start": 48,
                  "end": 129,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 129,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 129,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 67,
                          "end": 78,
                          "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "superClass": null,
                          "body": {
                            "type": "ClassBody",
                            "start": 75,
                            "end": 78,
                            "body": []
                          },
                          "decorators": [],
                          "typeParameters": null,
                          "implements": [],
                          "abstract": false,
                          "declare": false,
                          "superTypeArguments": null
                        },
                        {
                          "type": "ClassDeclaration",
                          "start": 87,
                          "end": 108,
                          "id": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "superClass": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "body": {
                            "type": "ClassBody",
                            "start": 105,
                            "end": 108,
                            "body": []
                          },
                          "decorators": [],
                          "typeParameters": null,
                          "implements": [],
                          "abstract": false,
                          "declare": false,
                          "superTypeArguments": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 123,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 122,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 120,
                              "object": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 118,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 132,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 132,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 131,
              "properties": [
                {
                  "type": "Property",
                  "start": 48,
                  "end": 129,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 129,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 129,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 67,
                          "end": 78,
                          "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "superClass": null,
                          "body": {
                            "type": "ClassBody",
                            "start": 75,
                            "end": 78,
                            "body": []
                          },
                          "decorators": [],
                          "typeParameters": null,
                          "implements": [],
                          "abstract": false,
                          "declare": false,
                          "superTypeArguments": null
                        },
                        {
                          "type": "ClassDeclaration",
                          "start": 87,
                          "end": 108,
                          "id": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "superClass": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "body": {
                            "type": "ClassBody",
                            "start": 105,
                            "end": 108,
                            "body": []
                          },
                          "decorators": [],
                          "typeParameters": null,
                          "implements": [],
                          "abstract": false,
                          "declare": false,
                          "superTypeArguments": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 123,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 122,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 120,
                              "object": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 118,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
