__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "name": "doNativeThing",
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
            "start": 30,
            "end": 42,
            "name": "flag",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 43,
          "end": 52,
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 45,
            "end": 52
          }
        }
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
  "end": 70,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 41,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 40,
          "value": "./dir/native.node",
          "raw": "\"./dir/native.node\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 69,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 68,
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 60,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "name": "doNativeThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 61,
            "end": 67,
            "value": "good",
            "raw": "\"good\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
