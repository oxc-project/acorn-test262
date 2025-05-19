__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 23,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 16,
          "end": 22
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 78,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 39,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 78,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 76,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 47,
                    "end": 76,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 76,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 48,
                        "end": 69,
                        "decorators": [],
                        "name": "a",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 52,
                            "end": 69,
                            "elementType": {
                              "type": "TSUnionType",
                              "start": 53,
                              "end": 66,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 53,
                                  "end": 54,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 53,
                                    "end": 54,
                                    "decorators": [],
                                    "name": "X",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 57,
                                  "end": 66
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 22,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 123,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 123,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 123,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 41,
              "end": 123,
              "properties": [
                {
                  "type": "Property",
                  "start": 114,
                  "end": 121,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 118,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 120,
                    "end": 121,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
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
      "start": 126,
      "end": 153,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 133,
        "end": 153,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 152,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 143,
              "end": 152,
              "properties": [
                {
                  "type": "Property",
                  "start": 145,
                  "end": 150,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 150,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
