__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "value": 1,
              "raw": "1"
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
      "end": 35,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 34,
        "value": "./existingModule",
        "raw": "'./existingModule'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 72,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 71,
        "value": "./missingModule",
        "raw": "'./missingModule'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 135,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 129,
                "end": 132,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 132,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 132,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
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
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 143,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 154,
      "expression": {
        "type": "CallExpression",
        "start": 145,
        "end": 153,
        "callee": {
          "type": "Identifier",
          "start": 145,
          "end": 148,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
