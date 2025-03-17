__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 22,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "Member",
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 45,
      "declaration": {
        "type": "Identifier",
        "start": 38,
        "end": 44,
        "decorators": [],
        "name": "Member",
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
  "end": 187,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./b'",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 67,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "raw": "'./b'",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 37,
          "end": 38,
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 48,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 68,
      "end": 94,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 88,
        "end": 93,
        "raw": "'./b'",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 75,
          "end": 82,
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 82,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 95,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 106,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 114,
          "end": 119,
          "raw": "\"./b\"",
          "value": "./b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 123,
        "end": 135,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 133,
          "decorators": [],
          "name": "Member",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 137,
        "end": 144,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 141,
          "end": 142,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 146,
        "end": 153,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 150,
          "end": 151,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 155,
        "end": 170,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 159,
          "end": 168,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 172,
        "end": 186,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 176,
          "end": 184,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 184,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
