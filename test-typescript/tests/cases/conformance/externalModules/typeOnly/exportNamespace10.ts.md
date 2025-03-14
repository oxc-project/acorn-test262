/a.ts
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "ns",
        "optional": false
      },
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "\"./a\"",
        "value": "./a"
      }
    }
  ],
  "sourceType": "module"
}
```
/c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "ns",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 37,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 33,
                  "end": 37,
                  "left": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 35,
                    "decorators": [],
                    "name": "ns",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 40,
            "end": 50,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 44,
              "end": 48,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 44,
                "end": 46,
                "decorators": [],
                "name": "ns",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
