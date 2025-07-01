__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
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
          ],
          "start": 20,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "increment",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 64
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 77
                },
                "typeArguments": null,
                "start": 72,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "start": 65,
            "end": 77
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 95
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 99
                  },
                  "optional": false,
                  "computed": false,
                  "start": 90,
                  "end": 99
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 101
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 109,
                        "end": 110
                      },
                      "start": 105,
                      "end": 110
                    },
                    "id": null,
                    "generator": false,
                    "start": 100,
                    "end": 110
                  }
                ],
                "optional": false,
                "start": 90,
                "end": 111
              },
              "start": 83,
              "end": 112
            }
          ],
          "start": 79,
          "end": 114
        },
        "expression": false,
        "start": 46,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
