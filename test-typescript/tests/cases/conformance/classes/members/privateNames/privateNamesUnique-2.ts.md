a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 98,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 98,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 26,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 25,
                "name": "x"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 31,
              "end": 96,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 35,
                "decorators": [],
                "name": "copy",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 96,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 62,
                  "end": 96,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 72,
                      "end": 81,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 72,
                        "end": 80,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 77,
                          "decorators": [],
                          "name": "other",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 78,
                          "end": 80,
                          "name": "x"
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
                    "start": 36,
                    "end": 60,
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSImportType",
                        "start": 43,
                        "end": 60,
                        "argument": {
                          "type": "TSLiteralType",
                          "start": 50,
                          "end": 55,
                          "literal": {
                            "type": "Literal",
                            "start": 50,
                            "end": 55,
                            "raw": "\"./b\"",
                            "value": "./b"
                          }
                        },
                        "options": null,
                        "qualifier": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 60,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
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
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 28,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 28,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 26,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 25,
                "name": "x"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
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
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 63,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 62,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 75,
            "end": 82,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 101,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 112,
        "arguments": [
          {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 103,
          "end": 109,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "decorators": [],
            "name": "copy",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
