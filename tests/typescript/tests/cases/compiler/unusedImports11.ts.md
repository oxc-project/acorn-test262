__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Member",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 19
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 20,
          "end": 22
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Member",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 44
      },
      "exportKind": "value",
      "start": 23,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
            "name": "Member",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "start": 37,
          "end": 38
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "importKind": "value",
          "start": 42,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 61,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 30,
      "end": 67
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 82
          },
          "start": 75,
          "end": 82
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 88,
        "end": 93
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 68,
      "end": 94
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./b",
          "raw": "\"./b\"",
          "start": 114,
          "end": 119
        },
        "start": 106,
        "end": 120
      },
      "importKind": "value",
      "start": 95,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Member",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [],
        "start": 123,
        "end": 135
      },
      "directive": null,
      "start": 123,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [],
        "start": 137,
        "end": 144
      },
      "directive": null,
      "start": 137,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [],
        "start": 146,
        "end": 153
      },
      "directive": null,
      "start": 146,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 168
          },
          "optional": false,
          "computed": false,
          "start": 159,
          "end": 168
        },
        "typeArguments": null,
        "arguments": [],
        "start": 155,
        "end": 170
      },
      "directive": null,
      "start": 155,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 184
          },
          "optional": false,
          "computed": false,
          "start": 176,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [],
        "start": 172,
        "end": 186
      },
      "directive": null,
      "start": 172,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 187
}
```
