__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 116,
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 116,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 114,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 90,
              "end": 114,
              "body": {
                "type": "TSEnumBody",
                "start": 101,
                "end": 114,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 103,
                    "end": 106,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 106,
                      "decorators": [],
                      "name": "ASC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 108,
                    "end": 112,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "DESC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 100,
                "decorators": [],
                "name": "Order",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "lf",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 50,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 13,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 8,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 2,
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3,
            "end": 8,
            "decorators": [],
            "name": "Order",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 11,
          "end": 13,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 27,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 14,
            "end": 22,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 27,
            "decorators": [],
            "name": "DESC",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 30,
          "end": 31,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 45,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 33,
            "end": 41,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "ASC",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 48,
          "end": 49,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
