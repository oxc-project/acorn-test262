__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 54,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 28,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 27,
          "raw": "\"./cls\"",
          "value": "./cls"
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 42,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
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
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "\"./cls\"",
        "value": "./cls"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 49,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 43,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 46,
          "end": 48,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 59,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 21,
        "raw": "\"./cls\"",
        "value": "./cls"
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 23,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "GLO",
        "optional": false,
        "typeAnnotation": null
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
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 15,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 14,
        "raw": "\"./bar\"",
        "value": "./bar"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 16,
      "end": 31,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "\"./bin\"",
        "value": "./bin"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 52,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 51,
        "raw": "\"./globalNs\"",
        "value": "./globalNs"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
