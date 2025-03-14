existingModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
test.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 34,
        "raw": "'./existingModule'",
        "value": "./existingModule"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 72,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 71,
        "raw": "'./missingModule'",
        "value": "./missingModule"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 44,
          "end": 47,
          "imported": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 109,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 101,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 101,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 98,
              "end": 101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 108,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 104,
          "end": 108
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 124,
            "end": 134,
            "properties": [
              {
                "type": "Property",
                "start": 126,
                "end": 127,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 129,
                "end": 132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 132,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 132,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
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
      "start": 137,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 143,
        "arguments": [
          {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 154,
      "expression": {
        "type": "CallExpression",
        "start": 145,
        "end": 153,
        "arguments": [
          {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 145,
          "end": 148,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
