__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 103,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 103,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 101,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 101,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 101,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 47,
                      "end": 95,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 50,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 50,
                        "end": 95,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 51,
                            "end": 60,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 52,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 62,
                          "end": 95,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 76,
                              "end": 85,
                              "argument": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 105,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "name": "xc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 117,
        "end": 120,
        "left": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 119,
          "end": 120,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 150,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 129,
        "end": 150,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 133,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 138,
              "name": "cProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 141,
              "end": 149,
              "callee": {
                "type": "Identifier",
                "start": 145,
                "end": 147,
                "name": "xc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 165,
            "name": "cReturnVal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 168,
            "end": 181,
            "callee": {
              "type": "MemberExpression",
              "start": 168,
              "end": 177,
              "object": {
                "type": "Identifier",
                "start": 168,
                "end": 173,
                "name": "cProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 177,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 178,
                "end": 180,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
