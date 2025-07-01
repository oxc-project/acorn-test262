__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 29
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 39
              },
              "initializer": null,
              "computed": false,
              "start": 36,
              "end": 39
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 48
              },
              "initializer": null,
              "computed": false,
              "start": 45,
              "end": 48
            }
          ],
          "start": 30,
          "end": 50
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ConstEnum",
        "raw": "'./ConstEnum'",
        "start": 28,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 42
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 69
      },
      "exportKind": "value",
      "start": 43,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "exportKind": "value",
          "start": 9,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ConstEnum",
        "raw": "'./ConstEnum'",
        "start": 39,
        "end": 52
      },
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 19
          },
          "importKind": "value",
          "start": 8,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ConstEnum",
        "raw": "\"./ConstEnum\"",
        "start": 26,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AlsoEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "start": 48,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ImportExport",
        "raw": "\"./ImportExport\"",
        "start": 62,
        "end": 78
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 79
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StillEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 96
          },
          "start": 87,
          "end": 96
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ReExport",
        "raw": "\"./ReExport\"",
        "start": 102,
        "end": 114
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 80,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 128
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 132
        },
        "optional": false,
        "computed": false,
        "start": 117,
        "end": 132
      },
      "directive": null,
      "start": 117,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "AlsoEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 142
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 146
        },
        "optional": false,
        "computed": false,
        "start": 134,
        "end": 146
      },
      "directive": null,
      "start": 134,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "StillEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 157
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 161
        },
        "optional": false,
        "computed": false,
        "start": 148,
        "end": 161
      },
      "directive": null,
      "start": 148,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 162
}
```
