__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "name": "Point",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 20,
          "end": 36,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 21,
              "end": 27
            },
            {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            }
          ]
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
      "start": 39,
      "end": 114,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 64,
          "name": "increment",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 65,
            "end": 77,
            "name": "point",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 77,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 79,
          "end": 114,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 83,
              "end": 112,
              "argument": {
                "type": "CallExpression",
                "start": 90,
                "end": 111,
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 99,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 95,
                    "name": "point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 99,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 100,
                    "end": 110,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 105,
                      "end": 110,
                      "left": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 109,
                        "end": 110,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
