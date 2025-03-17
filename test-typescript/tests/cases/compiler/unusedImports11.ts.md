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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "name": "Member",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 22,
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
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 45,
      "declaration": {
        "type": "Identifier",
        "start": 38,
        "end": 44,
        "name": "Member",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "Member",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "Member",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./b",
        "raw": "'./b'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 67,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 37,
          "end": 38,
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Member",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "value": "./b",
        "raw": "'./b'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 68,
      "end": 94,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 75,
          "end": 82,
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 82,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 88,
        "end": 93,
        "value": "./b",
        "raw": "'./b'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 95,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "r",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 106,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 114,
          "end": 119,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 136,
      "expression": {
        "type": "NewExpression",
        "start": 123,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 133,
          "name": "Member",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 145,
      "expression": {
        "type": "NewExpression",
        "start": 137,
        "end": 144,
        "callee": {
          "type": "Identifier",
          "start": 141,
          "end": 142,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 154,
      "expression": {
        "type": "NewExpression",
        "start": 146,
        "end": 153,
        "callee": {
          "type": "Identifier",
          "start": 150,
          "end": 151,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 171,
      "expression": {
        "type": "NewExpression",
        "start": 155,
        "end": 170,
        "callee": {
          "type": "MemberExpression",
          "start": 159,
          "end": 168,
          "object": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "name": "Member",
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
      "start": 172,
      "end": 187,
      "expression": {
        "type": "NewExpression",
        "start": 172,
        "end": 186,
        "callee": {
          "type": "MemberExpression",
          "start": 176,
          "end": 184,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 184,
            "name": "Member",
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
