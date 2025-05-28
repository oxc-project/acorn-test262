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
          "decorators": [],
          "name": "doNativeThing",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 30,
            "end": 42,
            "decorators": [],
            "name": "flag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 43,
          "end": 52,
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 45,
            "end": 52
          }
        },
        "body": null,
        "expression": false
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
  "end": 69,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "decorators": [],
            "name": "doNativeThing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 61,
            "end": 67,
            "value": "good",
            "raw": "\"good\""
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
