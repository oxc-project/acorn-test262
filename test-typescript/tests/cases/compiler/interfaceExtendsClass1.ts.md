__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 39,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "decorators": [],
              "name": "state",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Control",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 109,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 109,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 92,
            "end": 107,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 98,
              "decorators": [],
              "name": "select",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 69,
        "decorators": [],
        "name": "SelectableControl",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 159,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 157,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 151,
              "decorators": [],
              "name": "select",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 157,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 122,
        "decorators": [],
        "name": "Button",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 138,
        "decorators": [],
        "name": "Control",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 160,
      "end": 210,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 210,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 208,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 202,
              "decorators": [],
              "name": "select",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 208,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 208,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 173,
        "decorators": [],
        "name": "TextBox",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 182,
        "end": 189,
        "decorators": [],
        "name": "Control",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 242,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 242,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 222,
        "decorators": [],
        "name": "Image",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 231,
        "end": 238,
        "decorators": [],
        "name": "Control",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 243,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 264,
            "end": 276,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 270,
              "decorators": [],
              "name": "select",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 270,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 273,
                "end": 276,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 257,
        "decorators": [],
        "name": "Location",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
