__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 69,
        "decorators": [],
        "name": "SelectableControl",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 78,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "Control",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 109,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 92,
            "end": 107,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 98,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 106,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 102,
                "end": 106
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 159,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 122,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 138,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 151,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 157,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 157,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 160,
      "end": 210,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 173,
        "decorators": [],
        "name": "TextBox",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 182,
        "end": 189,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 210,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 208,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 202,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 208,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 208,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 242,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 222,
        "decorators": [],
        "name": "Image",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 231,
        "end": 238,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 242,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 243,
      "end": 278,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 257,
        "decorators": [],
        "name": "Location",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 264,
            "end": 276,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 270,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 270,
              "end": 276,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 273,
                "end": 276,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
