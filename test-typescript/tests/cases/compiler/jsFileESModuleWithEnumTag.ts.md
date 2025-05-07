__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 381,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 80,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 83,
            "end": 113,
            "properties": [
              {
                "type": "Property",
                "start": 87,
                "end": 96,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "OnPush",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 100,
                "end": 110,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 107,
                  "decorators": [],
                  "name": "Default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 182,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 181,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 170,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 138,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 139,
            "end": 169,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 139,
              "end": 162,
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 163,
              "end": 169,
              "decorators": [],
              "name": "OnPush",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 173,
          "end": 181,
          "raw": "'OnPush'",
          "value": "OnPush",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 183,
          "end": 239,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 206,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 207,
            "end": 238,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 207,
              "end": 230,
              "decorators": [],
              "name": "ChangeDetectionStrategy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 231,
              "end": 238,
              "decorators": [],
              "name": "Default",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 242,
          "end": 251,
          "raw": "'Default'",
          "value": "Default",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 323,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 322,
        "arguments": [
          {
            "type": "Identifier",
            "start": 275,
            "end": 298,
            "decorators": [],
            "name": "ChangeDetectionStrategy",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 300,
            "end": 308,
            "raw": "\"aField\"",
            "value": "aField",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 310,
            "end": 321,
            "properties": [
              {
                "type": "Property",
                "start": 311,
                "end": 320,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 316,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 318,
                  "end": 320,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 253,
          "end": 274,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 253,
            "end": 259,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 260,
            "end": 274,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 380,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 346,
        "end": 379,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 346,
          "end": 369,
          "decorators": [],
          "name": "ChangeDetectionStrategy",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 370,
          "end": 378,
          "raw": "\"bField\"",
          "value": "bField",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
