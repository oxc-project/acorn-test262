__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doNativeThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "flag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "start": 30,
            "end": 42
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 45,
            "end": 52
          },
          "start": 43,
          "end": 52
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./dir/native.node",
          "raw": "\"./dir/native.node\"",
          "start": 21,
          "end": 40
        },
        "start": 13,
        "end": 41
      },
      "importKind": "value",
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doNativeThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 60
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "good",
            "raw": "\"good\"",
            "start": 61,
            "end": 67
          }
        ],
        "optional": false,
        "start": 43,
        "end": 68
      },
      "directive": null,
      "start": 43,
      "end": 69
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
