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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 78,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 76,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 76,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 80,
      "end": 133,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 107,
        "end": 133,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 110,
            "end": 131,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 126,
              "end": 131,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
              "decorators": [],
              "name": "MyElement",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 95,
        "end": 106,
        "raw": "'elements1'",
        "value": "elements1",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 135,
      "end": 188,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 162,
        "end": 188,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 165,
            "end": 186,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 181,
              "end": 186,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 180,
              "decorators": [],
              "name": "MyElement",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 150,
        "end": 161,
        "raw": "'elements2'",
        "value": "elements2",
        "regex": null,
        "bigint": null
      }
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
  "end": 149,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 64,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "decorators": [],
        "name": "s1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 96,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 95,
          "raw": "'elements1'",
          "value": "elements1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 98,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "decorators": [],
        "name": "s2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 110,
        "end": 130,
        "expression": {
          "type": "Literal",
          "start": 118,
          "end": 129,
          "raw": "'elements2'",
          "value": "elements2",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 149,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 132,
        "end": 148,
        "children": [],
        "closingElement": null,
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
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
