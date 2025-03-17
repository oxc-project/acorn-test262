__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 78,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 76,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 80,
      "end": 133,
      "id": {
        "type": "Literal",
        "start": 95,
        "end": 106,
        "value": "elements1",
        "raw": "'elements1'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 107,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 110,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
              "name": "MyElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 126,
              "end": 131,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 135,
      "end": 188,
      "id": {
        "type": "Literal",
        "start": 150,
        "end": 161,
        "value": "elements2",
        "raw": "'elements2'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 162,
        "end": 188,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 165,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 180,
              "name": "MyElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 181,
              "end": 186,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 64,
  "end": 150,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 64,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "name": "s1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 96,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 95,
          "value": "elements1",
          "raw": "'elements1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 98,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "name": "s2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 110,
        "end": 130,
        "expression": {
          "type": "Literal",
          "start": 118,
          "end": 129,
          "value": "elements2",
          "raw": "'elements2'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 149,
      "expression": {
        "type": "JSXElement",
        "start": 132,
        "end": 148,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 132,
          "end": 148,
          "attributes": [],
          "name": {
            "type": "JSXMemberExpression",
            "start": 133,
            "end": 145,
            "object": {
              "type": "JSXIdentifier",
              "start": 133,
              "end": 135,
              "name": "s1"
            },
            "property": {
              "type": "JSXIdentifier",
              "start": 136,
              "end": 145,
              "name": "MyElement"
            }
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
