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
        "start": 18,
        "end": 21
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
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "elements1",
        "raw": "'elements1'",
        "start": 98,
        "end": 109
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
              "start": 119,
              "end": 128
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 129,
              "end": 134
            },
            "abstract": false,
            "declare": false,
            "start": 113,
            "end": 134
          }
        ],
        "start": 110,
        "end": 136
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 83,
      "end": 136
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "elements2",
        "raw": "'elements2'",
        "start": 153,
        "end": 164
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
              "start": 174,
              "end": 183
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 184,
              "end": 189
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 189
          }
        ],
        "start": 165,
        "end": 191
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 138,
      "end": 191
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 192
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
