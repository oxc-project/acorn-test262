__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 98,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 98,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 26,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 25,
                "name": "x"
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
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
              "start": 31,
              "end": 96,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 35,
                "decorators": [],
                "name": "copy",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 96,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                            "value": "./b",
                            "raw": "\"./b\""
                          }
                        },
                        "options": null,
                        "qualifier": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 60,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
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
                        "object": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 77,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 78,
                          "end": 80,
                          "name": "x"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
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
__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 28,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 28,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 26,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 25,
                "name": "x"
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 63,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 62,
        "value": "./b",
        "raw": "\"./b\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 83,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 75,
            "end": 82,
            "callee": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 112,
        "callee": {
          "type": "MemberExpression",
          "start": 103,
          "end": 109,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "decorators": [],
            "name": "copy",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
