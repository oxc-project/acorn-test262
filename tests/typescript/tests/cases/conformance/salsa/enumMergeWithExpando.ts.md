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
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "lf",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 116,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 114,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 90,
              "end": 114,
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 100,
                "decorators": [],
                "name": "Order",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 101,
                "end": 114,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 103,
                    "end": 106,
                    "id": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 106,
                      "decorators": [],
                      "name": "ASC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 108,
                    "end": 112,
                    "id": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "DESC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 13,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 8,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 2,
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 3,
            "end": 8,
            "decorators": [],
            "name": "Order",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 11,
          "end": 13,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 32,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 27,
          "object": {
            "type": "MemberExpression",
            "start": 14,
            "end": 22,
            "object": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 27,
            "decorators": [],
            "name": "DESC",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 30,
          "end": 31,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 45,
          "object": {
            "type": "MemberExpression",
            "start": 33,
            "end": 41,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "ASC",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 48,
          "end": 49,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
