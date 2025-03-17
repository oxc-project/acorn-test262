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
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 79,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 78,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 39,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 47,
                    "end": 76,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 48,
                        "end": 69,
                        "name": "a",
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
                                    "name": "X",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 76,
                      "body": []
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
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 118,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 120,
                    "end": 121,
                    "value": 1,
                    "raw": "1"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 153,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 133,
        "end": 153,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 152,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 150,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
