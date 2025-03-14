dir/native.d.node.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 53,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "decorators": [],
          "name": "doNativeThing",
          "optional": false
        },
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
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
main.ts
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
        "decorators": [],
        "name": "mod",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 41,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 40,
          "raw": "\"./dir/native.node\"",
          "value": "./dir/native.node"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 69,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 68,
        "arguments": [
          {
            "type": "Literal",
            "start": 61,
            "end": 67,
            "raw": "\"good\"",
            "value": "good"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "mod",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "decorators": [],
            "name": "doNativeThing",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
