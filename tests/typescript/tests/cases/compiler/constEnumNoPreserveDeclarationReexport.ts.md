__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 29,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 30,
          "end": 50,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 36,
              "end": 39,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 45,
              "end": 48,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": true,
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
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "value": "./ConstEnum",
        "raw": "'./ConstEnum'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 70,
      "declaration": {
        "type": "Identifier",
        "start": 58,
        "end": 69,
        "decorators": [],
        "name": "MyConstEnum",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 31,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 52,
        "value": "./ConstEnum",
        "raw": "'./ConstEnum'"
      },
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
  "end": 162,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 19,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 19,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 39,
        "value": "./ConstEnum",
        "raw": "\"./ConstEnum\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 79,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 48,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "decorators": [],
            "name": "AlsoEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 78,
        "value": "./ImportExport",
        "raw": "\"./ImportExport\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 115,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 87,
          "end": 96,
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 96,
            "decorators": [],
            "name": "StillEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 114,
        "value": "./ReExport",
        "raw": "\"./ReExport\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 133,
      "expression": {
        "type": "MemberExpression",
        "start": 117,
        "end": 132,
        "object": {
          "type": "Identifier",
          "start": 117,
          "end": 128,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 129,
          "end": 132,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 147,
      "expression": {
        "type": "MemberExpression",
        "start": 134,
        "end": 146,
        "object": {
          "type": "Identifier",
          "start": 134,
          "end": 142,
          "decorators": [],
          "name": "AlsoEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 143,
          "end": 146,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 162,
      "expression": {
        "type": "MemberExpression",
        "start": 148,
        "end": 161,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "decorators": [],
          "name": "StillEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 161,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
