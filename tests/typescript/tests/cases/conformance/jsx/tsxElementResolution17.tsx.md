__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 73,
              "end": 76
            },
            "declare": false,
            "start": 45,
            "end": 76
          }
        ],
        "start": 19,
        "end": 78
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "elements1",
        "raw": "'elements1'",
        "start": 95,
        "end": 106
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 125
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 126,
              "end": 131
            },
            "abstract": false,
            "declare": false,
            "start": 110,
            "end": 131
          }
        ],
        "start": 107,
        "end": 133
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 80,
      "end": 133
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "elements2",
        "raw": "'elements2'",
        "start": 150,
        "end": 161
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 180
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 181,
              "end": 186
            },
            "abstract": false,
            "declare": false,
            "start": 165,
            "end": 186
          }
        ],
        "start": 162,
        "end": 188
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 135,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "s1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 73
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "elements1",
          "raw": "'elements1'",
          "start": 84,
          "end": 95
        },
        "start": 76,
        "end": 96
      },
      "importKind": "value",
      "start": 64,
      "end": 97
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "s2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 107
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "elements2",
          "raw": "'elements2'",
          "start": 118,
          "end": 129
        },
        "start": 110,
        "end": 130
      },
      "importKind": "value",
      "start": 98,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXMemberExpression",
            "object": {
              "type": "JSXIdentifier",
              "name": "s1",
              "start": 133,
              "end": 135
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "MyElement",
              "start": 136,
              "end": 145
            },
            "start": 133,
            "end": 145
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 132,
          "end": 148
        },
        "children": [],
        "closingElement": null,
        "start": 132,
        "end": 148
      },
      "directive": null,
      "start": 132,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 64,
  "end": 149
}
```
