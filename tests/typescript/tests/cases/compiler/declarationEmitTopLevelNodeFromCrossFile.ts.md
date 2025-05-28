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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 23,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 16,
          "end": 22
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 79,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 79,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 78,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 47,
                    "end": 76,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 53,
                                    "end": 54,
                                    "decorators": [],
                                    "name": "X",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 76,
                      "body": []
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
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 22,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 123,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 123,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 123,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 118,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 120,
                    "end": 121,
                    "value": 1,
                    "raw": "1"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 153,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 133,
        "end": 153,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 152,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 150,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
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
