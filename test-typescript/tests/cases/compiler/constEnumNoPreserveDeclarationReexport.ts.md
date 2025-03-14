ConstEnum.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 50,
        "body": {
          "type": "TSEnumBody",
          "start": 30,
          "end": 50,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 36,
              "end": 39,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            {
              "type": "TSEnumMember",
              "start": 45,
              "end": 48,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 29,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false
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
ImportExport.d.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "raw": "'./ConstEnum'",
        "value": "./ConstEnum"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false
          }
        }
      ]
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
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
ReExport.d.ts
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
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 52,
        "raw": "'./ConstEnum'",
        "value": "./ConstEnum"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 31,
          "exported": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
usages.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 39,
        "raw": "\"./ConstEnum\"",
        "value": "./ConstEnum"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 19,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 79,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 78,
        "raw": "\"./ImportExport\"",
        "value": "./ImportExport"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 115,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 114,
        "raw": "\"./ReExport\"",
        "value": "./ReExport"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 133,
      "expression": {
        "type": "MemberExpression",
        "start": 117,
        "end": 132,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 117,
          "end": 128,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 129,
          "end": 132,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 147,
      "expression": {
        "type": "MemberExpression",
        "start": 134,
        "end": 146,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 134,
          "end": 142,
          "decorators": [],
          "name": "AlsoEnum",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 143,
          "end": 146,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 162,
      "expression": {
        "type": "MemberExpression",
        "start": 148,
        "end": 161,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 157,
          "decorators": [],
          "name": "StillEnum",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 161,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
