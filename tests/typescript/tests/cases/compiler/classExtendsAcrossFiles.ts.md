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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 129,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 129,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 67,
                          "end": 78,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 75,
                            "end": 78,
                            "body": []
                          },
                          "abstract": false,
                          "declare": false
                        },
                        {
                          "type": "ClassDeclaration",
                          "start": 87,
                          "end": 108,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 105,
                            "end": 108,
                            "body": []
                          },
                          "abstract": false,
                          "declare": false
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
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 129,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 129,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 67,
                          "end": 78,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 75,
                            "end": 78,
                            "body": []
                          },
                          "abstract": false,
                          "declare": false
                        },
                        {
                          "type": "ClassDeclaration",
                          "start": 87,
                          "end": 108,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 105,
                            "end": 108,
                            "body": []
                          },
                          "abstract": false,
                          "declare": false
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
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
