__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 301,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 110,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 42,
        "end": 110,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 55,
          "name": "multiM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 56,
          "end": 110,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 86,
              "end": 108,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 93,
                "end": 108,
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 101,
                  "end": 108,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 139,
      "end": 267,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 146,
        "end": 267,
        "id": {
          "type": "Identifier",
          "start": 153,
          "end": 159,
          "name": "multiM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 160,
          "end": 267,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 192,
              "end": 214,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 199,
                "end": 214,
                "id": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 207,
                  "end": 214,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 243,
              "end": 265,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 250,
                "end": 265,
                "id": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 258,
                  "end": 265,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 284,
      "expression": {
        "type": "NewExpression",
        "start": 269,
        "end": 283,
        "callee": {
          "type": "MemberExpression",
          "start": 273,
          "end": 281,
          "object": {
            "type": "Identifier",
            "start": 273,
            "end": 279,
            "name": "multiM",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 300,
      "expression": {
        "type": "NewExpression",
        "start": 285,
        "end": 299,
        "callee": {
          "type": "MemberExpression",
          "start": 289,
          "end": 297,
          "object": {
            "type": "Identifier",
            "start": 289,
            "end": 295,
            "name": "multiM",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
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
  "end": 236,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 52,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 51,
          "value": "commentsMultiModuleMultiFile_0",
          "raw": "'commentsMultiModuleMultiFile_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 220,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 98,
        "end": 220,
        "id": {
          "type": "Identifier",
          "start": 105,
          "end": 111,
          "name": "multiM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 112,
          "end": 220,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 144,
              "end": 166,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 151,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 159,
                  "end": 166,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 196,
              "end": 218,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 203,
                "end": 218,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 211,
                  "end": 218,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 236,
      "expression": {
        "type": "NewExpression",
        "start": 221,
        "end": 235,
        "callee": {
          "type": "MemberExpression",
          "start": 225,
          "end": 233,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 231,
            "name": "multiM",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
