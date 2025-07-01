__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "lf",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Order",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 100
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ASC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 106
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 103,
                    "end": 106
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DESC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 108,
                    "end": 112
                  }
                ],
                "start": 101,
                "end": 114
              },
              "const": false,
              "declare": false,
              "start": 90,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 83,
            "end": 114
          }
        ],
        "start": 77,
        "end": 116
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 56,
      "end": 116
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 117
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 2
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Order",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 8
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 8
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 11,
          "end": 13
        },
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 16
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "optional": false,
            "computed": false,
            "start": 14,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DESC",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 27
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 27
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 30,
          "end": 31
        },
        "start": 14,
        "end": 31
      },
      "directive": null,
      "start": 14,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "lf",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Order",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "optional": false,
            "computed": false,
            "start": 33,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ASC",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 45
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 48,
          "end": 49
        },
        "start": 33,
        "end": 49
      },
      "directive": null,
      "start": 33,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
