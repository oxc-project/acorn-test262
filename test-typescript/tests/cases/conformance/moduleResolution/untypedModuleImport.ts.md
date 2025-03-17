__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 28,
        "end": 37,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 28,
          "end": 35,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
  "end": 36,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 35,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 34,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 29,
          "end": 32,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 59,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 58,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 71,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 60,
        "end": 70,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 64,
            "end": 69,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
